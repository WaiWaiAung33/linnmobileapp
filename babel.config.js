module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
         "root": [
           "./"
         ],
         "alias": {
           "@screens": "./src/screens",
           "@navigators": "./src/navigators",
           "@images": "./assets/images",
           "@icons": "./assets/icons",
           "@fonts": "./assets/fonts",
           "@components": "./src/components",
           "@styles":"./src/styles",
           "@consts": "./src/consts",
           "@apis": "./src/apis",
         
         }
        }
      ]
    ]
  };
};
