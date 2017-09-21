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

// Fade information
const FADE_DELAY = 120000
const FADE_TIME = 2000

// Word information
const WCHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!.,;"\'()[]{}'.split('')
const WDELIM = [' ', 'Enter', 'Tab']
const WRESET = ['Backspace']

// Current word
var $word = null

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
    })
})
