export interface Student {
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

export interface CreateStudentData {
  name: string
  email: string
  phone?: string
  birth_date: string
  gender: 'M' | 'F' | 'Outro'
  weight?: number
  height?: number
}

export interface UpdateStudentData {
  name?: string
  email?: string
  phone?: string
  birth_date?: string
  gender?: 'M' | 'F' | 'Outro'
  weight?: number
  height?: number
  is_active?: boolean
}

export interface PerformanceTest {
  id: string
  created_at: string
  student_id: string
  test_type: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
  test_date: string
  metrics: Record<string, any>
  observations: string | null
  user_id: string
  student?: Student
}

export interface CreatePerformanceTestData {
  student_id: string
  test_type: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
  test_date: string
  metrics: Record<string, any>
  observations?: string
}

export interface UpdatePerformanceTestData {
  student_id?: string
  test_type?: 'físico' | 'técnico' | 'tático' | 'psicológico' | 'médico'
  test_date?: string
  metrics?: Record<string, any>
  observations?: string
}

export interface PerformanceEvaluationTest {
  id: string
  created_at: string
  student_id: string
  cooper_test_id: string
  intensity_percentage: number
  training_time_minutes: number
  test_date: string
  training_distance: number
  intensity: number
  speed: number
  oxygen_consumption: number
  calorie_burn: number
  weight_loss: number
  observations: string | null
  user_id: string
  student?: Student
  cooper_test?: PerformanceTest
}

export interface CreatePerformanceEvaluationData {
  student_id: string
  cooper_test_id: string
  intensity_percentage: number
  training_time_minutes: number
  test_date: string
  observations?: string
}

export interface UpdatePerformanceEvaluationData {
  student_id?: string
  cooper_test_id?: string
  intensity_percentage?: number
  training_time_minutes?: number
  test_date?: string
  observations?: string
}