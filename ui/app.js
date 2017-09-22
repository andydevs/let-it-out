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

// Charity url
const CHARITY = 'https://donatenow.networkforgood.org/adaa?code=Home'

// Timing information
const FADE_DELAY = 180000
const FADE_TIME  = 2000
const DONT_DELAY = 360000

// Word information
const CHARS = ' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}'.split('')
const BCKSP = 'Backspace'

// Buffers for objects in the scene
var $donate = null

// Add handlers
$(() => {
    // Set keydown handler
    $(document).on('keydown', (event) => {
        if (_.includes(CHARS, event.key))
            $('#app').trigger('writechar', [event.key])
        else if (event.key === BCKSP)
            $('#app').trigger('backspace')
    })

    // Set writechar handler
    $('#app').on('writechar', (event, chr) => {
        $('#app').append(
            $(`<span class="char">${chr}</span>`)
                .delay(FADE_DELAY)
                .animate({opacity: 0}, FADE_TIME)
        )
    })

    // Set backspace handler
    $('#app').on('backspace', (event) => {
        $('#app > .char:last-of-type').remove()
    })

    // Reveal the donate button after a while
    setTimeout(() => {
        // Create donate
        $donate = $('<a href="'+CHARITY+'" id="donate">Donate</a>')

        // Append donate to app and fade in
        $('#app').append($donate)
        $donate.fadeIn()
    }, DONATE_DELAY)
})
