import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sshomowthxabsoycgfcu.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaG9tb3d0aHhhYnNveWNnZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTczOTEsImV4cCI6MjA0NTc5MzM5MX0.jEh_2loFx6JaWX6rLn59d5bAsmxTTmPu_sSLr0yBLHo",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaG9tb3d0aHhhYnNveWNnZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMTczOTEsImV4cCI6MjA0NTc5MzM5MX0.jEh_2loFx6JaWX6rLn59d5bAsmxTTmPu_sSLr0yBLHo"
    }
})