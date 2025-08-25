import { createBrowserClient } from '@supabase/ssr'

export function createSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export type Database = {
  public: {
    Tables: {
      students: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          birth_date: string
          gender: 'M' | 'F' | 'Outro'
          weight: number | null
          height: number | null
          is_active: boolean
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          birth_date: string
          gender: 'M' | 'F' | 'Outro'
          weight?: number | null
          height?: number | null
          is_active?: boolean
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          birth_date?: string
          gender?: 'M' | 'F' | 'Outro'
          weight?: number | null
          height?: number | null
          is_active?: boolean
          user_id?: string
        }
      }
      performance_tests: {
        Row: {
          id: string
          created_at: string
          student_id: string
          test_type: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
          test_date: string
          metrics: Record<string, any>
          observations: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          student_id: string
          test_type: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
          test_date: string
          metrics: Record<string, any>
          observations?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          student_id?: string
          test_type?: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
          test_date?: string
          metrics?: Record<string, any>
          observations?: string | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}