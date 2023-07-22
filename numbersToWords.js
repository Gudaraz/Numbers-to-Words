function numeroALetras(num) {
    let data = {
    numero: num,
    enteros: Math.floor(num),
    decimales: Math.round(num * 100) - Math.floor(num) * 100,
    letrasDecimales: '',
    };

  if (data.decimales > 0) data.letrasDecimales = ' punto ' + Millones(data.decimales);

  if (data.enteros === 0) return 'cero' + data.letrasDecimales;
  if (data.enteros === 1) return Millones(data.enteros) + data.letrasDecimales;
  else return Millones(data.enteros) + data.letrasDecimales;
}

function Unidades(num) {
  const aLetras = {
    1: 'uno',
    2: 'dos',
    3: 'tres',
    4: 'cuatro',
    5: 'cinco',
    6: 'seis',
    7: 'siete',
    8: 'ocho',
    9: 'nueve',
  };

  return aLetras[num] || '';
} 

function Decenas(num) {
  let decena = Math.floor(num / 10);
  let unidad = num - decena * 10;

  const aLetras = {
    1: (() => {
      const aLetra = {
        0: 'diez',
        1: 'once',
        2: 'doce',
        3: 'trece',
        4: 'catorce',
        5: 'quince',
      };
      return aLetra[unidad] || 'dieci' + Unidades(unidad);
    })(),
    2: unidad === 0 ? 'veinte' : 'veinti' + Unidades(unidad),
    3: DecenasY('treinta', unidad),
    4: DecenasY('cuarenta', unidad),
    5: DecenasY('cincuenta', unidad),
    6: DecenasY('sesenta', unidad),
    7: DecenasY('setenta', unidad),
    8: DecenasY('ochenta', unidad),
    9: DecenasY('noventa', unidad),
    0: Unidades(unidad),
  };

  return aLetras[decena] || '';
} 

function DecenasY(strSin, numUnidades) {
  if (numUnidades > 0) return strSin + ' y ' + Unidades(numUnidades);
  return strSin;
} 

function Centenas(num) {
  let centenas = Math.floor(num / 100);
  let decenas = num - centenas * 100;

  const aLetras = {
    1: decenas > 0 ? 'ciento ' + Decenas(decenas) : 'cien',
    2: 'doscientos ' + Decenas(decenas),
    3: 'trescientos ' + Decenas(decenas),
    4: 'cuatrocientos ' + Decenas(decenas),
    5: 'quinientos ' + Decenas(decenas),
    6: 'seiscientos ' + Decenas(decenas),
    7: 'setecientos ' + Decenas(decenas),
    8: 'ochocientos ' + Decenas(decenas),
    9: 'novecientos ' + Decenas(decenas),
    }

    return aLetras[centenas] || Decenas(decenas)
    } //Centenas()

    function Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let letras = ''

    if (cientos > 0)
    if (cientos > 1) letras = Centenas(cientos) + ' ' + strPlural
    else letras = strSingular

    if (resto > 0) letras += ''

    return letras
    } //Seccion()

    function Miles(num) {
    let divisor = 1000
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let strMiles = Seccion(num, divisor, 'un mil', 'mil')
    let strCentenas = Centenas(resto)

    if (strMiles == '') return strCentenas
    return strMiles + ' ' + strCentenas
    } //Miles()

    function Millones(num) {
    let divisor = 1000000
    let cientos = Math.floor(num / divisor)
    let resto = num - cientos * divisor

    let strMillones = Seccion(num, divisor, 'un millón', 'millones')
    let strMiles = Miles(resto)

    if (strMillones == '') return strMiles
    return strMillones + ' ' + strMiles
    } //Millones()

    function formatSalaryAndBonus(totalGastosInt, totalAlimentaryPercentageInt) {
      const formattedSueldo = formatAmount(totalGastos) + ' pesos';
      const formattedBonos = formatAmount(totalAlimentaryPercentage);
      return {sueldo: formattedSueldo, bonos: formattedBonos};
    } 

    function formatAmount(amount) {
      if (amount === 0) {
        return '';
      } else {
        const amountString = amount.toString();
        const parsedAmount = parseInt(amountString.replace(/\./g, '').replace(/\-/g, ''));
        return parsedAmount >= 1000000 && parsedAmount % 1000000 === 0 ? 'de pesos' : 'pesos';
      }
    }
