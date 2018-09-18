/**
 * Let It Out
 *
 * A UI where you can write your words down and watch them fade away,
 * dissappearing from your mind.
 *
 * Author:  Anshul Kharbanda
 * Created: 9 - 21 - 2017
 */
// Imports
import info from './resources/html/info.html'
import './resources/style/main.scss'
import './textbox'

// Timing information
const FADE_DELAY = 180000
const FADE_TIME  = 2000

// Word information
const CHARS = (' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            + '!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}').split('')
const BCKSP = 'Backspace'

// Add handlers
$(document).ready(() => {
    // Set up textbox
    $('#textbox').textbox()

    // Append info bar
    console.log('Append info html...')
    $('<div id="info"></div>').append(info)

    // Set toolbar handlers
    console.log('Set toolbar handlers')
    $('#button-darkmode').click((event) => {
        console.log('#button-darkmode pressed')
        $('#app').toggleClass('darkmode')
    })
    $('#button-info').click((event) => {
        console.log('#button-info pressed')
        $('#info').fadeToggle()
        $('#textbox').toggleClass('blurred')
    })
})
