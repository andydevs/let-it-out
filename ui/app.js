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
import $ from 'jquery'
import _ from 'lodash'
import './style.scss'

// Timing information
const FADE_DELAY = 180000
const FADE_TIME  = 2000

// Word information
const CHARS = (' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            + '!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}').split('')
const BCKSP = 'Backspace'

// Add handlers
$(document).ready(() => {
    // Set document keydown handler
    console.log('Document keydown handler')
    $(document).on('keydown', (event) => {
        console.log('#app keydown event')
        if (_.includes(CHARS, event.key))
            $('#app').trigger('writechar', [event.key])
        else if (event.key === BCKSP)
            $('#app').trigger('backspace')
    })

    // Set writechar handler for app
    console.log('Special handlers for #app')
    $('#app').on('writechar', (event, chr) => {
        console.log('#app writechar event: ' + chr)
        $('#app').append(
            $(`<span class="char">${chr}</span>`)
                .delay(FADE_DELAY)
                .animate({opacity: 0}, FADE_TIME))
    })
    // Set backspace handler for app
    $('#app').on('backspace', (event) => {
        console.log('#app backspace event')
        $('#app > .char:last-of-type').remove()
    })
    // Set clear handler for app
    $('#app').on('clear', (event) => {
        console.log('#app clear event')
        $('#app > .char').remove()
    })

    // Append toolbar
    console.log('Append toolbar...')
    $('#app').append(
        $('<div id="toolbar"></div>')
            .append('<span class="button" id="button-darkmode"></span>')
            .append('<span class="button" id="button-clear"></span>'))
    // Set toolbar handlers
    console.log('Set toolbar handlers')
    $('#button-clear').on('click', (event) => {
        console.log('#button-clear pressed')
        $('#app').trigger('clear')
    })
    $('#button-darkmode').on('click', (event) => {
        console.log('#button-darkmode pressed')
        $('#app').toggleClass('darkmode')
    })
})
