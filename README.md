# BackBotTrafico

para instalar las dependencias corra el siguiente comando
```
npm install
```

para correr el bot corra el siguiente comando
```
npm run dev
```

# Configuración .env

crea el archivo .env en la raiz del proyecto, luego configura la siguientes lineas
```
PORT=XXXX
KEY_JWT=XXXXXXX
IPSRV=XXX.XXX.XXX.XXX
```

## Versions

nodejs: 14.18.3

## activar o desactivar proxy

linea 13 en botTrafic\utils\launchBotColor.js

## configuración o modificación del bot de mensaje

- Para cambiar el mensaje de los bots en la linea 976 del archivo controllers\bot.js
- Para modificar el delay del envio de los mensaje se cambia en la linea 250 del archivo utils\launchBotSendMessage.js