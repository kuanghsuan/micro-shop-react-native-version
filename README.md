# micro-shop-react-native-version

<h3 align="center">
	Micro Store - React Native
</h3>

<p align="center">
	<img alt="Licence" src="https://img.shields.io/github/license/stevenpersia/tinder-react-native.svg?style=flat-square">
	<img alt="Star" src="https://img.shields.io/badge/you%20like%20%3F-STAR%20ME-blue.svg?style=flat-square">
</p>

<p align="center">
	<img src="./assets/demo.jpg" width="600">
</p>

# Overview

4 screens are availables : Login, Order, Product and Auth. Using <strong>redux</strong>, <strong>hook</strong> to manage the state of user's products, all products, cart items, and user's orders.

Using <strong>firebase</strong> as backend to storage the products, orders and cart items. As well as authentication.

# Setup
  In your terminal, make sure your Node.js version is not less than 10.13.0, run `sudo npm install expo-cli —global`.
  Further more detail on how to set up an react-native app with expo: https://docs.expo.io/tutorial/planning/?redirected
```
# Example workflow for contributing to a project:
$ git clone https://github.com/kuanghsuan/what-to-eat-mobile.git
$ cd micro-shop-react-native-version

# install all required packages
$ npm install
```

# Run on simulator
 1. Open your xcode simulator or android simulator.
 2. Run `npm start`.
 3. Press `a` for Android emulator, or `i` for IOS simulator.
 4. Press `r` to restart bundler, or `shift+R` to restart and clear cache.
 5. If you want to run on real device, download the 'Expo' in the App store, and scan the QR-code.
 
# Debug
 1. Downlod `react-native-debugger_0.11.3.dmg` on https://github.com/jhen0409/react-native-debugger/releases.
 2. Press `command+D` on your simulator and click `Debug remote JS`, the React Native Debugger will connect to your app.
 3. Open React Native Debugger you just download and press `command+T` to type the port(usually is 19001).
 
# Props
### AuthInput

| Name           | Type     | Required | Description                                               | Example                                             |
| -------------- | -------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `id`           | string   | Yes      | Id of input field.                                        | `id="title"`                                        |
| `label`        | string   | Yes      | Lable of input field.                                     | `label="Title"`                                     |
| `keyboadType`  | string   | No       | Type of keyboad.                                          | `keyboadType="default."`                            |
| `required`     | boolean  | Yes      | Whether this field need to validate.                      | `required=true`                                     |
| `errorText`    | string   | Yes      | Display the error when invalid.                           | `errorText`                                         |
| `onInputChange`| function | Yes      | Swipe card to right.                                      | `onInputChange={inputChangeHandler}`                |
| `initialValue` | string   | Yes      | Display the initial text in the field.                    | `initialValue=""`                                   |

### ProductItem

| Name           | Type     | Required | Description                                               | Example                                             |
| -------------- | -------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `image`        | string   | Yes      | Image of product.                                         | `image="123.jpg"`                                   |
| `title`        | string   | Yes      | Title of product.                                         | `title="T-shirt"`                                   |
| `price`        | string   | Yes      | Price of product.                                         | `price=10`                                          |
| `onSelect`     | function | Yes      | Press to remove this cart item.                           | `onSelect={() => {}}`                               |

### CartItem

| Name           | Type     | Required | Description                                               | Example                                             |
| -------------- | -------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `amount`       | string   | Yes      | Amount of ordered product.                                | `amount="3"`                                        |
| `date`         | string   | Yes      | Date of ordered date.                                     | `date="July 29, 2020, 02:56 PM"`                    |
| `deletable`    | boolean  | Yes      | Whether this item can be deleted.                         | `deletable=true`                                    |
| `onRemove`     | function | Yes      | Press to remove this cart item.                           | `onRemove={()={}}`.                                 |

### OrderItem

| Name           | Type      | Required | Description                                               | Example                                             |
| -------------- | --------- | -------- | --------------------------------------------------------- | --------------------------------------------------- |
| `amount`       | string    | Yes      | Amount of ordered product.                                | `amount="3"`                                        |
| `date`         | string    | Yes      | Date of ordered date.                                     | `date="July 29, 2020, 02:56 PM"`                    |
| `items`        | CartItem[]| Yes      | Array of cartItem which be ordered.                       | `items={itemData.item.items}`                       |

