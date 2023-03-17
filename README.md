# nuxt3-template

A [Nuxt 3](https://nuxt.com/docs/guide/concepts/auto-imports) + TypeScript starter template.

- [Vue Macros](https://vue-macros.sxzz.moe/guide/getting-started.html)
- [VueUse](https://vueuse.org/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Pinia](https://pinia.vuejs.org/introduction.html)

## Usage

```bash
# Install packages
yarn

# Create .env
cp .env.example .env

# Start Vite dev server
yarn dev

# Build for production
yarn build

# Start Nitro server
yarn start
```

## Local HTTPS

If you use [`mkcert`](https://github.com/FiloSottile/mkcert) and would like to run the Vite dev server using a HTTPS address, there are a few extra setup steps.

1. Uncomment the `vite` config in `nuxt.config.ts`

2. Create local certificates using `mkcert`.

3. Set up an `nginx` reverse proxy using the provided `nginx-example.conf`. Change all instances of `example.com` to the hostname you would like to use, and also update the `ssl_certificate` and `ssl_certificate_key` paths to point the certificate created in the previous step. If you change the default `NITRO_PORT` from `3000` also make sure to update the port in the `location / { ... }` block.

4. Update your hosts file

```
127.0.0.1       example.test
::1             example.test
```
