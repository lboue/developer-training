---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CreateCredentials from '/docs/\_partials/create-credentials.md';
import HowToDownload from '/docs/\_partials/download-from-kasm.md'
import HowToFlash from '/docs/\_partials/flash-the-example-kasm.md'

# Golioth Hello Example

The Hello example is the most basic network-connected example: a 'hello world' with a long distance between processor and terminal. 

## Learning Objectives

'Hello' shows not only that you can build and flash a binary, but that the binary includes credentials for your WiFi and the Golioth cloud, and that the board can successfully connect to both.

### Desired outcome(s)
* See device logs displayed on the Golioth Console 

### Time Estimate
* 5 minutes

## Workflow

### Build in the Kasm container

1. In the Kasm container, go to your local copy of [the magtag-demo repository](https://github.com/golioth/magtag-demo).

    ```bash
    cd ~/Desktop/magtag-training/app
    ```

2. Create a file for WiFi and Golioth credentials

  <CreateCredentials/>

3. Build the example, including the credentials file you just created

    ```bash
    west build -b esp32s2_saola hello -p
    ```

4. Download the binary

    * Run `west kasm download` to package the compiled code and make it
      available for download
    * Use the Download option in Kasm's left sidebar to download
      `merged_<appfolder>_<hhmmss>.bin` to your local machine.

  <HowToDownload/>

### Update MagTag firmware from your local machine

<HowToFlash/>

## Expected Results

After flashing the example you need to press the Reset button to run the program. Your MagTag may not visibly react for a few seconds as it initializes the WiFi hardware. The two center LEDs will turn blue as the board attempts to connect to the internet and establish a secure connection with Golioth. The Golioth logo will be displayed on the ePaper screen during this time.

When a connection is established, all four LEDs will turn green and the MagTag will being sending Hello messages to Golioth once every five seconds. The ePaper screen will display a connected message, and will print a Hello messages when log messages are sent. Each log message in this demo is sent to the Golioth servers, and can be be viewed on [the Golioth Console](https://console.golioth.io/) by selecting Monitor&rarr;Logs from the sidebar menu.

![Golioth Hello output shown on the Logs in Golioth Console](../assets/golioth-hello.png)

## Challenge: Modifying Hello

* Find the log messages on the "device" page, instead of Monitor&rarr;Logs
* Change the log level from "INFO" to "WARN" and see them displayed on the log page.
* Change how often the logs are sent to Golioth
