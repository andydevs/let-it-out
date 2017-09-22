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

<<<<<<< HEAD
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
=======
/**
 * Creates a new word and adds it to the app
 */
function newWord() {
    $word = $('<span class="word"></span>')
    $('#app').append($word)
}

/**
 * Adds the current character to the current word
 *
 * @param char the char to add
 */
function add(char) {
    $word.html((i, html) => html + char)
}

/**
 * Releases the current word from it's grip on your heart and lets
 * it fade away into the light, never to be thought of again...
 */
function fadeAway() {
    // Add a space
    add(' ')
    // Fade effect
    $word.delay(FADE_DELAY)
         .fadeOut(FADE_TIME)
    // Start anew
    $word = null
}

/**
 * Quickly fades the word (deleting an error)
 */
function quickFade() {
    // Add a space
    add(' ')
    // Quick fade effect
    $word.fadeOut(FADE_TIME)
    $word = null
}

// Add handlers
$(() => {
    // Set keydown handler
    $(document).keydown((event) => {
        // Create a word if word is not created
        if ($word === null) newWord()
        // Add characters to the word
        if (_.includes(WCHARS, event.key)) add(event.key)
        // Fade the word if a terminator character is typed
        if (_.includes(WRESET, event.key)) quickFade()
        else if (_.includes(WDELIM, event.key)) fadeAway()
>>>>>>> c9d9149f75cb99fe621fd0214f38d354f89493df
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
