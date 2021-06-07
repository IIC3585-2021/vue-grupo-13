<template>
  <div class="Container">
  <div class="BasicInfo">
  <h3>{{ basicInfo.name }}</h3>
  <h3 class="Symbol">{{ basicInfo.symbol }}</h3>
  <h3>{{ basicInfo.url }}</h3></div>
 <div class="MarketTable">
  <h2> Precio y estadísticas de mercado</h2>
  <table>
    <tbody>
      <tr>
        <td>
          <span> Id </span>
        </td>
        <td>
          <span> {{ marketInfo.assetId }} </span>
        </td>
      </tr>
      <tr>
        <td>
          <span> Suministro actual </span>
        </td>
        <td>
          <span> {{ marketInfo.freeFloatSupply }} </span>
        </td>
      </tr>
      <tr>
        <td>
          <span> Market cap  </span>
        </td>
        <td>
          <span> {{ marketInfo.marketCap }} </span>
        </td>
      </tr>
      <tr>
        <td>
          <span> Posición ranking market cap </span>
        </td>
        <td>
          <span> {{ marketInfo.marketCapRank }} </span>
        </td>
      </tr>
      <tr>
        <td>
          <span> Precio (USD) </span>
        </td>
        <td>
          <span> {{ marketInfo.price }} </span>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>

</template>

<script>

export default {
  name: 'assetDetail',
  props: {
    marketInfo: Object,
    basicInfo: Object,
  },
};
</script>

<style scoped>

.Container {
  display: flex;
}

.BasicInfo {
  flex: 1;
  padding: 2rem;
}

.MarketTable {
  flex: 3;
  padding: 2rem;
}

table {
  width: 100%;
  margin-top: 1rem;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
  background-color: #f3f3f3;
}

.Symbol {
  font-size: 20px;
  color: black;
  font-weight: bolder;
}

td {
  padding: 1rem;
}
</style>
