# Currency Converter

Currency Converter is a simple React application that allows users to convert between different currencies using real-time exchange rates. The application uses the **ExchangeRate-API** to fetch exchange rates and provides a user-friendly interface built with **Material UI**.

## Features

- Convert between a wide range of currencies.
- Automatically update the conversion result when the input value or selected currencies change.
- Swap currencies with a single click.
- Responsive and interactive design with animations for a smooth user experience.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Obaisamman/currency-converter.git
    cd currency-converter
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Get an API key from [ExchangeRate-API](https://www.exchangerate-api.com/) by signing up for a free account.

4. Create a `.env` file in the root directory of the project and add your API key:

    ```bash
    REACT_APP_API_KEY=your_api_key_here
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and go to `http://localhost:5173` to use the application.

## Usage

- Enter the amount you want to convert in the input field.
- Select the currencies you want to convert between from the dropdown menus.
- The conversion result will automatically appear as you type or change currencies.
- Use the swap button to quickly reverse the currencies and get the conversion result.

## Important Notes

- Make sure to add your API key to the `.env` file as shown above. The API key is required to fetch real-time exchange rates.
- Do not share your API key publicly. Always exclude sensitive information like API keys when sharing your project by including `.env` in `.gitignore`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool for modern web applications.
- **Material UI**: A popular React UI framework for building responsive, accessible, and customizable components.
- **ExchangeRate-API**: A reliable and easy-to-use API for retrieving real-time exchange rates.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you would like to improve the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
