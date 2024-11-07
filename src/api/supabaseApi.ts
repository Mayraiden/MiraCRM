import { createClient } from '@supabase/supabase-js'

// const supaUrl: string = import.meta.env.VITE_SUPA_BASE_URL!
// const supaApi: string = import.meta.env.VITE_SUPA_BASE_API!

const supaApi: string =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcGZ2aGNjYWNoZWpjeGdic3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MTkwMTcsImV4cCI6MjA0NjM5NTAxN30.oh-ZpW7HBcNAiTeopQxGbM4FXlx_mrvsl2wlae717bE'
const supaUrl: string = 'https://bipfvhccachejcxgbspn.supabase.co'

export const supabase = createClient(supaUrl, supaApi)
