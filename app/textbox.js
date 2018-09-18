/**
 * Let It Out
 *
 * A UI where you can write your words down and watch them fade away,
 * dissappearing from your mind.
 *
 * Author:  Anshul Kharbanda
 * Created: 9 - 21 - 2017
 */
(function ($) {
    // Timing information
    const FADE_DELAY = 2000
    const FADE_TIME  = 2000

    // Word information
    const CHARS = (' 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
                + '!?@#$%^&*()_+-=\\/><.,;:~`"\'()[]{}').split('')
    const BCKSP = 'Backspace'

    $.fn.extend({

        textbox() {
            // Trigger focus on click
            this.on('click', event => {
                this.trigger('focus')
            })

            // on keypress
            this.on('keydown', event => {
                // If is a char
                event.preventDefault()
                if (_.includes(CHARS, event.key)) {
                    this.trigger('char', event.key)
                } else if (BCKSP === event.key) {
                    this.trigger('bcksp')
                }
            })

            // On char
            this.on('char', (event, key) => {
                this.append(
                    $(`<span class="char">${key}</span>`)
                        .delay(FADE_DELAY)
                        .animate({opacity: 0}, FADE_TIME)
                )
            })

            // On backspace
            this.on('bcksp', event => {
                this.find('.char:last-of-type').remove()
            })

            return this
        }

    })


})(jQuery)
