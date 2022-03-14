import '../scss/app.scss'

import bootstrap from 'bootstrap'

import { Form } from './js/form'
import { Posts } from './js/posts'
import { Post } from './js/post'

const formElement = document.querySelector('#form')
const postsElement = document.querySelector('#posts')
const postElement = document.querySelector('#post')

const form = new Form(formElement)
const posts = new Posts(postsElement)
const post = new Post(postElement)