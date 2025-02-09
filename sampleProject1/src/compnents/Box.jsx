// import React from 'react'
import PropTypes from 'prop-types';

Box.propTypes = {
    task: PropTypes.string.isRequired,
};

function Box({ task }) {
    return (
        <>
            <figure className="bg-slate-300 rounded-xl p-8 dark:bg-slate-800 max-w-sm mx-5">
                <div className="pt-6 space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {task}
                        </div>
                    </figcaption>
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that Ive seen scale
                            on large teams. Its easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                </div>
            </figure>
        </>
    )
}

export default Box;