# vercel-nextjs-crash

## Reproducing

1. Clone the repository
3. Create a new project on your user account through the vercel CLI or through your vercel account
4. Configure the project to use root directory "app", framework preset "nextjs". Overwrite "build command" to "(:)" and "install command" to "(:)" (without the quotes)
5. Setup github secrets `VERCEL_TOKEN` with a token scoped for your account, `VERCEL_PROJECT_ID` with the newly created project id and `VERCEL_ORD_ID` with your organization id
6. Create a PR towards main with an arbitrary change or push an empty commit to main
7. Open the preview url and notice that it crashes.