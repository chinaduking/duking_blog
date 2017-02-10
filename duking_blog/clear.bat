del /f /s /q server\node_modules\*.* /s
RD /q /s server\node_modules

del /f /s /q stage\node_modules\*.* /s
RD /q /s stage\node_modules

del /f /s /q admin\node_modules\*.* /s
RD /q /s admin\node_modules

exit