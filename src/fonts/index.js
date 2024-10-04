import localFont from 'next/font/local'

export const raleway = localFont({
    src: [
        {
            path:'../../public/fonts/raleway/Raleway-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path:'../../public/fonts/raleway/Raleway-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path:'../../public/fonts/raleway/Raleway-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-raleway',
})


export const roboto = localFont({
    src: [
        {
            path:'../../public/fonts/roboto/Roboto-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path:'../../public/fonts/roboto/Roboto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path:'../../public/fonts/roboto/Roboto-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-roboto',
})