import { AllWidgetProps, jsx, FeatureLayerDataSource, SqlQueryParams, DataSourceManager } from "jimu-core";
import { IMConfig } from "../config";
import { WidgetPlaceholder } from 'jimu-ui';
import { useState, useEffect } from 'react';

import defaultMessages from "./translations/default";
import React from "react";

export default function (props: AllWidgetProps<IMConfig>) {

  const [query, setQuery] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const onSelectionChange = (selection: any[]) => {
    setSelectedFeatures(selection);
  }

  useEffect(() => {
    // Listen for selection changes in the connected widget
    props.widgetRuntimeStateProps?.useSelection?.useSelections?.([props.config.useSelectionId], onSelectionChange);
  }, []);

  function removeCircularReferences(obj: any) {
    // Keep track of objects that have already been visited to avoid infinite recursion
    const visited = new WeakSet();
  
    function removeCircular(obj: any) {
      if (typeof obj === 'object' && obj !== null) {
        if (visited.has(obj)) {
          // If the object has already been visited, replace it with a placeholder value
          return '[Circular Reference]';
        }
        visited.add(obj);
        if (Array.isArray(obj)) {
          // If the object is an array, remove circular references from each element
          return obj.map((item) => removeCircular(item));
        } else {
          // If the object is an object, remove circular references from each property value
          const result: Record<string, any> = {};
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              result[key] = removeCircular(obj[key]);
            }
          }
          return result;
        }
      } else {
        // If the object is not an object, return it as is
        return obj;
      }
    }
  
    return removeCircular(obj);
  }

  const onLifeConnectClickHandler = async () => {
    if (props.useDataSources.length > 0) {
      // First get the DataSourceManager instance
      const dsManager = DataSourceManager.getInstance();
  
      // Get the data source using useDataSource.dataSourceId
      const useDataSource = props.useDataSources[0];
      const ds = dsManager.getDataSource(useDataSource.dataSourceId) as FeatureLayerDataSource;
  
      // Build the queryParams, with the configured filterField and the value
      // that has been typed into the TextInput by the user
      const queryParams: SqlQueryParams = {
        where: `${props.config.filterField} LIKE '%${query}%'`
      };
  
      // If there are selected features, add a where clause to filter by the selected features
      if (selectedFeatures.length > 0) {
        const selectedIds = selectedFeatures.map((feature) => feature.attributes[useDataSource.objectIdField]);
        const objectIdFieldName = useDataSource.objectIdField;
        queryParams.where += ` AND ${objectIdFieldName} IN (${selectedIds.join(',')})`;
      }

      // Query the data source using queryFeatures function and the queryParams.
      const features = await ds.query(queryParams);
  
      // Remove any circular references from the features
      const cleanedFeatures = removeCircularReferences(features);

      // Convert the cleaned features to JSON string
      const json = JSON.stringify(cleanedFeatures);
      console.log(json)
      
      // Send the JSON data to the API using fetch and a POST request
      try {
        const response = await fetch('https://lifehealth.life/api/bip-callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: json
        });
  
        if (response.ok) {
          setTimeout(function(){
            window.open('https://lifehealth.life/meetings', '_blank');
          }, 5000)
        }
        console.log('Data sent to API successfully');
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  const buttonStyle = {
    backgroundColor: '#0074d9',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-out',
  };

  const buttonHoverStyle = {
    backgroundColor: '#fff',
    color: '#0074d9',
  };
  
  // By default, if we have no filterField selected, show a placeholder:
  // let mainContent = <WidgetPlaceholder message={defaultMessages.chooseAttribute} />;

  // if (props.config.filterField) {
  //   // If fieldField is selected, show the Text Input box to allow filtering.
  //   const placeholderText = `${defaultMessages.filterLayer} on ${props.config.filterField} attribute`
  //   mainContent = <p>
  //     <TextInput placeholder={placeholderText} onChange={(e) => { textInputChangeHandler(e); }} />
  //   </p>;
  // };

  return (
    <div className="widget-get-map-coordinates jimu-widget p-2">
      {/* {mainContent} */}
      <div><button style={buttonStyle} 
      onClick={onLifeConnectClickHandler}
      onMouseEnter={(e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; e.target.style.color = buttonHoverStyle.color; }}
      onMouseLeave={(e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; e.target.style.color = buttonStyle.color; }}
      onMouseDown={(e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; e.target.style.color = buttonHoverStyle.color; }}
      onMouseUp={(e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; e.target.style.color = buttonStyle.color; }}
      >Life Connect</button>
</div>
    </div>
  );
}