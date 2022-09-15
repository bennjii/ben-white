module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/study/ncea-scholarship',
        destination: 'https://docs.google.com/document/d/1VN26wH46sXJei4uEulj11jcmNTLf8IWalg10tqIFjio/edit?usp=sharing',
        permanent: false,
      },
    ]
  },
  images: {
    domains: ['i.scdn.co'],
  },
}
