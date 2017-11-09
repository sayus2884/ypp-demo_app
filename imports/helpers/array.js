const _ = lodash;

export const createDrowdownOptions = (array, {key, value, text, icon},
   // Manipulate passed values if needed
   options = {
      keyOption: (key) => key,
      valueOption: (value) => value,
      textOption: (text) => text
   }) => {

   const { keyOption, valueOption, textOption } = options

   return _.map(array, (obj, index) => {
      if (typeof obj !== 'object' ) {
         return {
            key: keyOption ? keyOption(obj) : obj,
            //Pass key by default if arguments do not exist
            value: valueOption ? valueOption( obj ) : obj,
            text: textOption ? textOption(obj) : obj,
            icon
         };
      }

      return {
         key: keyOption ? keyOption(obj[key]) : obj[key],
         //Pass key by default if arguments do not exist
         value: valueOption ? valueOption(obj[ value ? value : key ]) : value ? obj[value] : parseInt(index),
         text: textOption ? textOption(obj[text ? text : key ]) : text ? obj[text] : obj[key],
         icon
      }
   });
}
