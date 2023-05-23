// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: money-bill-alt;
let buda = 'https://www.buda.com/api/v2/markets/btc-usdc/ticker';
let miIndicador = 'https://mindicador.cl/api';

const initValue = {
  initUf: 35110.98,
  initDolar: 859.51,
  initCobre: 3.82,
  initBtc: 16677.61,
  initIpc: 1.0,
  initTpm: 11.25
}

// Crear las Requests
let requestOne = new Request(buda);
let requestTwo = new Request(miIndicador);

// Hacer las llamadas a la API
let res1 = await requestOne.loadJSON();
let res2 = await requestTwo.loadJSON();

// Capturar los valores actuales de los indicadores
const btcPrice = res1.ticker.last_price[0];
const { uf, dolar, ipc, libra_cobre, tpm } = res2;

// Calcular los porcentajes de cambio
const yearToDate = (i, l) => {
  const ytd = ((l / i) - 1) * 100;
  return ytd.toLocaleString('es-CL', {maximumFractionDigits: 2});
}

// Crear un widget
let widget = new ListWidget();

widget.addText(`UF: ${uf.valor} (${yearToDate(initValue.initUf, uf.valor)}%)`);
widget.addText(`Dólar: ${dolar.valor} (${yearToDate(initValue.initDolar, dolar.valor)}%)`);
widget.addText(`Cobre: ${libra_cobre.valor} (${yearToDate(initValue.initCobre, libra_cobre.valor)}%)`);
widget.addText(`Bitcoin: USDC ${parseFloat(btcPrice)} (${yearToDate(initValue.initBtc, btcPrice)}%)`);
widget.addText(`IPC: ${ipc.valor}%`);
widget.addText(`TPM: ${tpm.valor}%`);

if (config.runsInWidget) {
  // Si el script se está ejecutando como un widget, finalizarlo aquí
  Script.setWidget(widget);
  Script.complete();
} else {
  // Si estamos en la aplicación, mostrar el widget para previsualizar
  widget.presentMedium();
}
