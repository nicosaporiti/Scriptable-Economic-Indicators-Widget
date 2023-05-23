# Scriptable-Economic-Indicators-Widget
This script displays current values for several economic indicators in Chile, as well as the Year-to-Date (YTD) changes compared to pre-set initial values. The script is designed to run in the Scriptable app on iOS.
## How it works
The script makes HTTP GET requests to two APIs: Buda and mindicador.cl. The Buda API provides the current price for Bitcoin in USD, while the mindicador.cl API provides the current values for several economic indicators in Chile, including UF, Dollar, Copper, IPC, and TPM.

The initial values for these indicators at the start of the year are set in the initValue object. The script calculates the YTD change for each indicator by comparing the current value to the initial value, and displays this percentage change along with the current value in a widget on the iOS home screen.

Here is a step-by-step explanation of the script:

The script first defines the API endpoints and the initial values for the indicators.

It creates HTTP Request objects for each API endpoint.

The script then sends the HTTP requests using the loadJSON() method, which sends the request and parses the JSON response.

The script retrieves the current values for the indicators from the JSON response.

It calculates the YTD change for each indicator by comparing the current value to the initial value.

The script then creates a new widget and adds text elements for each indicator, displaying the current value and the YTD change.

Finally, the script either sets the widget to be displayed on the home screen (if the script is being run as a widget), or displays the widget within the Scriptable app (if the script is being run within the app).

Please note that this script requires an internet connection to fetch the latest data from the APIs. It does not cache any data or remember any values between runs.
