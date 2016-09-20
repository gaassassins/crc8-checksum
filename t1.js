
// Класс для вычисления crc8 контрольных сумм
function CRC8(polynomial) { // конструктор принимает необязательный параметр - тип полинома из CRC8.POLY
  if (polynomial == null) polynomial = CRC8.POLY.CRC8
  this.table = CRC8.generateTable(polynomial);
}

// Возвращает 8-битную контрольную сумму
CRC8.prototype.checksum = function(byte_array) {
  var c = 0
  for (var i = 0; i < byte_array.length; i++ ) 
    c = this.table[(c ^ byte_array[i]) % 256] 

  return c;
} 

CRC8.generateTable =function(polynomial)
{
  var csTable = [] 
  
  for ( var i = 0; i < 256; ++i ) {
    var curr = i
    for ( var j = 0; j < 8; ++j ) {
      if ((curr & 0x80) !== 0) {
        curr = ((curr << 1) ^ polynomial) % 256
      } else {
        curr = (curr << 1) % 256
      }
    }
    csTable[i] = curr 
  }
    
  return csTable
}

CRC8.POLY = {
  CRC8 : 0xd5,
  CRC8_CCITT : 0x07,
  CRC8_DALLAS_MAXIM : 0x31,
  CRC8_SAE_J1850 : 0x1D,
  CRC_8_WCDMA : 0x9b,
}

  function d2h(d) { 
    return (+d).toString(16).toUpperCase();
  }

function d2b (d) {
  return d.toString(2);
}
function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}
