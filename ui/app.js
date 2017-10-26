/**
 * Shout
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
import './style.css'

// Timing information
const FADE_DELAY = 180000
const FADE_TIME  = 2000

// Word information
const CHARS = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}'.split('')
const BCKSP = 'Backspace'

// Add handlers
$(document).ready(() => {
    // Set document keydown handler
    $(document).on('keydown', (event) => {
        if (_.includes(CHARS, event.key))
            $('#app').trigger('writechar', [event.key])
        else if (event.key === BCKSP)
            $('#app').trigger('backspace')
    })

    // Set writechar handler for app
    $('#app').on('writechar', (event, chr) => {
        $('#app').append(
            $(`<span class="char">${chr}</span>`)
                .delay(FADE_DELAY)
                .animate({opacity: 0}, FADE_TIME)
        )
    })

    // Set backspace handler for app
    $('#app').on('backspace', (event) => {
        $('#app > .char:last-of-type').remove()
    })

    // Append toolbar
    $('#app').append(
        $('<div id="toolbar"></div>')
            .append('<span class="button" id="button-darkmode"></span>')
            .append('<span class="button" id="button-clear"></span>')
    )
})
