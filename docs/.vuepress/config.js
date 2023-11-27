import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Baby\'s First Year',
    description: 'Guide for the First Year of a Baby\'s Life',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }]
    ],

    theme: defaultTheme({

        navbar: [
            {
                text: 'Home',
                link: '/',
              },
              {
                text: '0-3 Months',
                link: '/0-3-months/',
              },
              {
                text: '4-8 Months',
                link: '/4-8-months/',
              },
              {
                text: '9-12 Months',
                link: '/9-12-months/',
              },
        ],
    }),

}