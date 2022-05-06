# Consulta RUC y DNI Perú

Esta librería utilzia la herramienta https://apis.net.pe/ para conseguir los datos de RUC y DNI.

## Instalación

Utilice NPM para instalar.

```bash
npm i peru_ruc_dni_exchange
```

## Usage

```typescript
import { getRucData, getDniData } from 'peru_ruc_dni_exchange';

getRucData("20607110302").then(console.log).catch(console.warn);

```

## Contribuciones
Bienvenidas sus pull request.
Por favor asegurese de probarlo bien.


## Licencia
[MIT](https://choosealicense.com/licenses/mit/)