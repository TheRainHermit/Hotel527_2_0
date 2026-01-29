# Supabase Setup for Hotel527

This README provides instructions for setting up and managing the Supabase database for the Hotel527 hotel management system.

## Getting Started

1. **Create a Supabase Project**:
   - Go to the [Supabase website](https://supabase.io) and sign in or create an account.
   - Create a new project and note down the API keys and database connection details.

2. **Initialize the Database**:
   - Use the `schema.sql` file located in this directory to set up your database schema.
   - You can run the SQL commands in the Supabase SQL editor or use a database client connected to your Supabase instance.

3. **Managing Migrations**:
   - For managing database migrations, consider using Supabase's built-in migration tools or manually track changes in the `schema.sql` file.

## Environment Variables

Make sure to configure your environment variables in your application to connect to the Supabase database. You will need the following details:
- `SUPABASE_URL`: The URL of your Supabase project.
- `SUPABASE_ANON_KEY`: The anonymous key for accessing your Supabase project.

## Additional Resources

- [Supabase Documentation](https://supabase.io/docs)
- [SQL Reference](https://supabase.io/docs/guides/database)

This README will be updated as the project evolves. Please refer to it for the latest instructions and information regarding the Supabase setup for Hotel527.