import React from 'react'

let Home = React.lazy(() => import('./pages/home/Home'))
let Services = React.lazy(() => import('./pages/services/Services'))
let Profile = React.lazy(() => import('./pages/OnDevelopment'))
let Contact = React.lazy(() => import('./pages/contact/Contact'))
let Notes = React.lazy(() => import('./pages/apps/StickyApp/StickyNotes'))
let Freepdf = React.lazy(() => import('./pages/services/studymat/ViewPdf'))
let Assignment = React.lazy(() => import('./pages/services/assignment/Assignment'))
let ViewPdfs = React.lazy(() => import('./pages/services/freepdf/ViewPdfs'))
let Phonepay = React.lazy(() => import('./payment/Phonepay'))
let SampleWorks = React.lazy(() => import('./pages/home/services/SampleWorks'))
let ViewPdf = React.lazy(() => import('./pages/services/studymat/ViewPdf'))
let ErrorPage = React.lazy(() => import('./pages/error/ErrorPage'))

export const AllRoute = [
    {
        id: 0,
        route: "/",
        element: Home
    },
    {
        id: 1,
        route: "/home",
        element: Home
    },
    {
        id: 2,
        route: "/service",
        element: Services
    },
    {
        id: 3,
        route: "/profile",
        element: Profile
    },
    {
        id: 4,
        route: "/contact",
        element: Contact
    },
    {
        id: 5,
        route: "/notes",
        element: Notes
    },
    {
        id: 6,
        route: "/freepdf",
        element: Freepdf
    },
    {
        id: 7,
        route: "/assignment",
        element: Assignment
    },
    {
        id: 8,
        route: "/view-free-pdf/:id",
        element: ViewPdfs
    },
    {
        id: 9,
        route: "/Phonepay/:id",
        element: Phonepay
    },
    {
        id: 10,
        route: "/SampleWorks",
        element: SampleWorks
    },
    {
        id: 11,
        route: "/view-pdf/:id",
        element: ViewPdf
    },
    {
        id: 11,
        route: "*",
        element: ErrorPage
    },
]