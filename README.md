# vercel-nextjs-crash

The `app` has been bootstrapped with `create-next-app` and we've added a simple `getServerSideProps` that fetches a name from `api/hello`

## Steps to reproduce

1. Clone the repository
3. Create a new project on your user account through the vercel CLI or through your vercel account. Use Node `v16.x` for the project.
4. Configure the project to use root directory "app", framework preset "nextjs". Overwrite "build command" to "(:)" and "install command" to "(:)" (without the quotes)
5. Setup github secrets `VERCEL_TOKEN` with a token scoped for your account, `VERCEL_PROJECT_ID` with the newly created project id and `VERCEL_ORD_ID` with your organization id
6. Create a PR towards main with an arbitrary change or push an empty commit to main
7. Open the preview url from the github action CI and notice that it crashes.

## Expected outcome

The function crashes when visiting the preview URL.

![500 Server Error](./Screenshot%202022-10-04%20at%2017.41.01.png?raw=true "500 Server Error")
![Function crash](./Screenshot%202022-10-04%20at%2017.41.12.png "Function crash")