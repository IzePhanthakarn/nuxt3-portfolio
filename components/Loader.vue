<template>
    <div class="flex flex-col items-center justify-center">
        <span class="loader"></span>
        <div class="spinner mt-4 text-lg font-medium text-white">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    </div>
</template>

<style scoped>
.loader {
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    color: #fff;
}

.loader:before,
.loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
}

.loader:after {
    color: #F13637;
    transform: rotateY(70deg);
    animation-delay: .4s;
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
    }
}

@keyframes rotateccw {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes spin {

    0%,
    100% {
        box-shadow: .2em 0px 0 0px currentcolor;
    }

    12% {
        box-shadow: .2em .2em 0 0 currentcolor;
    }

    25% {
        box-shadow: 0 .2em 0 0px currentcolor;
    }

    37% {
        box-shadow: -.2em .2em 0 0 currentcolor;
    }

    50% {
        box-shadow: -.2em 0 0 0 currentcolor;
    }

    62% {
        box-shadow: -.2em -.2em 0 0 currentcolor;
    }

    75% {
        box-shadow: 0px -.2em 0 0 currentcolor;
    }

    87% {
        box-shadow: .2em -.2em 0 0 currentcolor;
    }
}

.spinner {
    height: 50px;
    width: max-content;
    letter-spacing: .5em;
    filter: drop-shadow(0 0 8px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.spinner span {
    animation: loading6454 1.75s ease infinite;
}

.spinner span:nth-child(2) {
    animation-delay: 0.25s;
}

.spinner span:nth-child(3) {
    animation-delay: 0.5s;
}

.spinner span:nth-child(4) {
    animation-delay: 0.75s;
}

.spinner span:nth-child(5) {
    animation-delay: 1s;
}

.spinner span:nth-child(6) {
    animation-delay: 1.25s;
}

.spinner span:nth-child(7) {
    animation-delay: 1.5s;
}
.spinner span:nth-child(8) {
    animation-delay: 1.75s;
}
.spinner span:nth-child(9) {
    animation-delay: 2s;
}
.spinner span:nth-child(10) {
    animation-delay: 2.25s;
}

@keyframes loading6454 {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}</style>