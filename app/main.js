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
import info from './resources/html/info.html'
import './resources/style/main.scss'

// Timing information
const FADE_DELAY = 5000
const FADE_TIME  = 2000

// Word information
const CHARS = (' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            + '!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}').split('')
const BCKSP = 'Backspace'

// Add handlers
$(document).ready(() => {
    // Append textbox
    console.log('Append textbox...')
    $('#app').append(
        $('<div id="textbox" contenteditable></div>')
            .on('keydown', event => {
                event.preventDefault()
                console.log('#textbox keydown event')
                if (_.includes(CHARS, event.key))
                    $('#textbox').trigger('writechar', [event.key])
                else if (event.key === BCKSP)
                    $('#textbox').trigger('backspace')
            })
    )

    // Append toolbar
    console.log('Append toolbar...')
    $('#app').append(
        $('<div id="toolbar"></div>')
            .append('<span class="button" id="button-darkmode"></span>')
            .append('<span class="button" id="button-clear"></span>')
            .append('<span class="button" id="button-info"></span>')
    )

    // Append info bar
    console.log('Append info panel...')
    $('#app').append($('<div id="info"></div>').append(info))

    // Set writechar handler for app
    console.log('Special handlers for #app')
    $('#textbox').on('writechar', (event, chr) => {
        console.log('#app writechar event: ' + chr)
        $('#textbox').append(
            $(`<span class="char">${chr}</span>`)
                .delay(FADE_DELAY)
                .animate({opacity: 0}, FADE_TIME))
    })
    // Set backspace handler for app
    $('#textbox').on('backspace', (event) => {
        console.log('#app backspace event')
        $('#textbox > .char:last-of-type').remove()
    })
    // Set clear handler for app
    $('#textbox').on('clear', (event) => {
        console.log('#app clear event')
        $('#textbox > .char').remove()
    })

    // Set toolbar handlers
    console.log('Set toolbar handlers')
    $('#button-clear').click((event) => {
        console.log('#button-clear pressed')
        $('#app').trigger('clear')
    })
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
