<template>
  <div id="app">
    <h1>纽约天气是:</h1>
    <div>温度：{{weather}}°C</div>
    <div>天气：{{temperature}}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.fetchCityCode().then(key => {
      console.log(key)
      this.fetchJson(key);
    });
  },
  data() {
    return {
      weather: "",
      temperature: ""
    };
  },
  methods: {
    fetchCityCode() {
      return new Promise((resolve, reject) => {
        this.HttpTool.get(
          " https://apidev.accuweather.com/locations/v1/search",
          {
            params: {
              q: "ny",
              apikey: "hoArfRosT1215"
            }
          }
        )
          .then(re => {
            let data = re.data[0];
            let key = data.Key;
            resolve(key);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    fetchJson(key) {
      this.HttpTool.get(
        "https://apidev.accuweather.com/currentconditions/v1/" + key + ".json",
        {
          params: {
            apikey: "hoArfRosT1215",
            language: "zh"
          }
        }
      ).then(re => {
        let data = re.data[0];
        this.weather = data.Temperature.Metric.Value;
        this.temperature = data.WeatherText;
        console.log(re);
      });
    }
  }
};
</script>