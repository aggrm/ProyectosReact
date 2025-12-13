import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { DraftPatien, Patient } from '../types'
import {v4 as uuidv4} from 'uuid'

type PatientState ={
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatien) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatien) => void
}

const createPatient = (patient: DraftPatien) : Patient => {
    return{ ...patient, id: uuidv4()}
}

export const usePatientStore =create<PatientState>()(
    devtools(
    persist((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) =>({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id: Patient['id']) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id: Patient['id']) =>{
            set(() =>({
                activeId: id
            }))
        },
        editPatient: (id: Patient['id']) => {
            set((state) => ({
                patients: state.patients.map(patient => 
                    patient.id === id ? patient : patient
                )
            }))
        },
        updatePatient(data){
            set((state) =>({
                patients: state.patients.map(patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
                activeId: ''
            }))
        }
    }), {
        name: 'patientStorage'
    })
))