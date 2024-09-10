import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Load from '@/components/Load.vue'
import Student from '@/components/Student.vue'
import QuizList from '@/components/quizList.vue'
// import Studentmain from '@/components/Studentmain.vue'
import studentPaper from '@/components/studentPaper.vue'
import studentQuestion from '@/components/studentQuestion.vue'
import teacherPaper from '@/components/teacherPaper.vue'
import teacherStudent from '@/components/teacherStudent.vue'
import teacherDate from '@/components/teacherdate.vue'
import studentDate from '@/components/studentdate.vue'
import teacherPaperimg from '@/components/teacherPaperimg.vue'
import studentPaperimg from '@/components/studentPaperimg.vue'
import Admin from '@/components/admin.vue'
import teacher from '@/components/Teacher.vue'
import teacherQuizlist from '@/components/teacherQuizlist.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/load',
            component: Load
        },
        {
            path: '/student',
            component: Student,
        },
        {
            path: '/admin',
            component: Admin
        },
        {
            path: '/quizList',
            component: QuizList
        },
        {
            path: '/teacher',
            component: teacher,
        },
        {
            path: '/studentpaper',
            component: studentPaper
        },
        {
            path: '/teacherpaper',
            component: teacherPaper
        },
        {
            path: '/teacherpaperimg',
            component: teacherPaperimg
        },
        {
            path: '/studentpaperimg',
            component: studentPaperimg
        },
        {
            path: '/studentquestion',
            component: studentQuestion
        },
        {
            path: '/teacherdate',
            component: teacherDate
        },
        {
            path: '/studentdate',
            component: studentDate
        },
        {
            path: '/teacherstudent',
            component: teacherStudent
        },
        {
            path: '/teacherquizlist',
            component: teacherQuizlist
        },
        {
            path: '/',
            redirect: '/load'
        }
    ]
})

export default router