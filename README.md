# AI Content Generator

AI Content Generator is an intelligent tool designed to create high-quality content for blogs, social media posts, and other creative needs. With a user-friendly interface and powerful AI model GEMINI, it enables users to generate engaging and customized content efficiently.

## Features

- **Multi-format Content Generation**: Supports blog posts, social media captions, and more.
- **Customizable Outputs**: Allows users to specify tone, style, and length of the content.
- **Real-time Suggestions**: Provides instant feedback and suggestions to enhance your content.
- **AI-powered Optimization**: Ensures SEO-friendly and audience-targeted content.

## Tech Stack

- **Frontend**: Next.js, TailwindCSS, radix-ui, shadcn-ui
- **Backend**: Node.js, typescript
- **AI Model**: Google's gemini-flash
- **Database**: Neon DB(postgreSQL), Drizzle ORM
- **Deployment**: Vercel
- **Payment Merchant**: Razorpay

## Installation

Follow these steps to set up the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/V1sh4lC/ai-content-generator
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-content-generator
   ```

3. Install dependencies:
   ```bash
   npm install --force
   ```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the required API keys and configuration variables.

   Example:
   ```env
   GEMINI_API_KEY=your-api-key
   POSTGRESQL_DB_URI=your-db-uri
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Log in or sign up to access the application.
2. Select the type of content you want to generate.
3. Input necessary details such as topic, tone, and keywords.
4. Click on the "Generate" button to receive AI-generated content.
5. Edit and refine the output as needed.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them:
   ```bash
   git commit -m "Add your message here"
   git push origin feature-name
   ```
4. Open a Pull Request on GitHub.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or feedback, reach out to [vishalmessi550@example.com](mailto:vishalmessi550@example.com) or visit [vishalc-portfolio.com](https://vishalc-portfolio.netlify.app) and message me through my socials.

