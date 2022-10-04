# vercel-nextjs-crash

## Reproducing

1. Clone the repository
2. Run `yarn dlx vercel pull`
3. Create a new project on your user account through the CLI
4. Configure the project to use root directory "app", framework preset "nextjs". Overwrite "build command" to "(:)" and "install command" to "(:)" (without the quotes)
5. Create a PR towards main