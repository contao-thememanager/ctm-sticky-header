class StickyHeader
{
    constructor(o)
    {
        const i = {
            a:{'--hdr-0':60},
            b:{'--hdr-xs':60},
            c:{'--hdr-s':60},
            d:{'--hdr-m':100},
            e:{'--hdr-l':100},
            f:{'--hdr-xl':100},
            g:{'--bp-xs':600},
            h:{'--bp-s':768},
            i:{'--bp-m':1024},
            j:{'--bp-l':1264},
            k:{'--bp-xl':1921}
        };

        const r = window.getComputedStyle(document.body)
        const v = (p) => {return parseInt((r.getPropertyValue(Object.keys(p)[0]) || Object.values(p)[0]),10)}

        for (let k in i)
            i[k] = v(i[k])

        this.o = this._m({
            selector: 'header',
            linkSelector: 'header .mod_navigation .level_1 > li, ' +
                          'header .sh-el',
            scrollSettings: {
                startHeight: i.a,
                stopHeight:  i.a,
                stopPosition: 400,
                breakPosition: 600,
            },
            classes: {
                useClasses: true,
                isOpen: 'sh-open',
                onStop: 'sh-stop'
            },
            logo: {
                autoScale: true,
                selector: 'header .mod_logo',
                maxHeight: null,
                minHeight: null
            },
            responsive: {
                [i.g]: {
                    startHeight: i.b,
                    stopHeight:  i.a,
                },
                [i.h]: {
                    startHeight: i.c,
                    stopHeight:  i.a,
                },
                [i.i]: {
                    startHeight: i.d,
                    stopHeight:  i.a,
                },
                [i.j]: {
                    startHeight: i.e,
                    stopHeight:  i.a,
                },
                [i.k]: {
                    startHeight: i.f,
                    stopHeight:  i.a,
                }
            },
            showProgress: false,
            onInit: () => {},
            onPlay: () => {},
            onPause: () => {},
            onUpdate: () => {}
        }, o || {})

        if (!(this.el = document.querySelector(this.o.selector)))
            return

        if (this.o.linkSelector)
            this.a = this.el.querySelectorAll(this.o.linkSelector)

        if (this.o.logo.selector)
            this.l = document.querySelector(this.o.logo.selector)

        if (this.o.showProgress !== false)
            this.sp = document.querySelector(this.o.showProgress)

        this.ls = null
        this.d  = ''
        this.ld = ''
        this.bs = false

        this.p  = false
        this.sd = false

        this.s = {
            o: 1,
            h: 2
        }

        this._w()
        this._d()
        this._h()
        this._u()
        this._r()

        this.o.onInit.call(this)
    }

    _m(a, b)
    {
        return[...new Set([...Object.keys(a),...Object.keys(b)])].reduce((c,k)=>({...c,[k]:"object"===typeof(a[k])?Object.assign({},a[k],b[k]):!b[k]?a[k]:b[k]}),{})
    }

    _w()
    {
        this.x = this.o.scrollSettings

        if (!this.o.logo.autoScale && this.o.logo.selector)
        {
            this.x = this._m(this.x, {
                logo: {
                    maxHeight: this.o.logo.maxHeight,
                    minHeight: this.o.logo.minHeight
                }
            })
        }

        if (!!this.o.responsive)
        {
            for (let wd in this.o.responsive)
            {
                if (window.innerWidth >= wd)
                    this.x = this._m(this.x, this.o.responsive[wd])
            }
        }
    }

    _r()
    {
        window.addEventListener('scroll', () =>
        {
            if (this.p)
                return

            this._y()
            this._u()
            this._d()

        },{passive: true})

        window.addEventListener('resize', () =>
        {
            this._w()
            this._h()

            if (this.p)
                return

            this._u()

        },{passive: true})
    }

    _y()
    {
        if ((this.ls - window.scrollY) >= this.x.stopHeight) {
            this._s(this.s.o)
            this._h()
            this.d = 'up'
        }
        else if (((this.ls - window.scrollY) * -1) >= this.x.stopHeight)
        {
            this._s(this.s.h)
            this._h()
            this.d = 'down'
        }
    }

    _d()
    {
        this.ld = this.d

        if (!this.ls || this.ls === window.scrollY)
            this.d = ''

        else if (this.ls < window.scrollY)
            this.d = 'down'

        else if (this.ls > window.scrollY)
            this.d = 'up'

        this.ls = window.scrollY
    }

    _p()
    {
        return this.el.offsetTop + (this.ls - window.scrollY)
    }

    _h()
    {
        const f = window.scrollY / this.x.stopPosition
        const u = -(f) + 's'
        const r = -1 + 's'

        if (window.scrollY <= this.x.stopPosition)
        {
            this.el.style.height = this.x.startHeight - ((this.x.startHeight - this.x.stopHeight) * (window.scrollY / this.x.stopPosition)) + 'px'
            this.el.style.animationDelay = u

            if (this.o.linkSelector)
                for (let i = 0; i < this.a.length; i++) {
                    this.a[i].style.animationDelay = u
                }

            if(this.o.classes.useClasses)
                this.el.classList.remove(this.o.classes.onStop)
        }
        else
        {
            this.el.style.height = this.x.stopHeight + 'px'
            this.el.style.animationDelay = r

            if (this.o.linkSelector)
                for (let i = 0; i < this.a.length; i++)
                {
                    this.a[i].style.animationDelay = r
                }

            if(this.o.classes.useClasses)
                this.el.classList.add(this.o.classes.onStop)
        }

        if(this.o.logo.selector && this.l)
            this._l()

        if (this.sp)
            this.sp.dataset.headerProgress = f.toString()

        this.o.onUpdate.call(this, f)
    }

    _l()
    {
        const p = window.scrollY * 100 / this.x.stopPosition
        const h = this.o.logo.autoScale ? this.x.stopHeight / this.x.startHeight : this.x.logo.minHeight / this.x.logo.maxHeight
        const d = 1 - h

        if (window.scrollY <= this.x.stopPosition)
            this.l.style.transform = 'scale(' + (1 - (d * p / 100)).toFixed(3) + ')'
        else
            this.l.style.transform = 'scale(' + h.toFixed(3) + ')';
    }

    _s(s)
    {
        switch(s)
        {
            case this.s.o:
                this.el.style.top = 0
                break

            case this.s.h:
                this.el.style.top = -this.x.stopHeight + 'px'
                break
        }

        this._c(s)
    }

    // ClassHandler
    _c(s){
        if(!this.o.classes.useClasses)
            return

        switch(s) {
            case this.s.o:
                this.el.classList.add(this.o.classes.isOpen)
                break

            case this.s.h:
                this.el.classList.remove(this.o.classes.isOpen)
                break
        }
    }

    _u()
    {
        if (this.bs)
            this._b()

        // Above
        else if (window.scrollY < this.x.breakPosition) {
            this._h()
            this._s(this.s.o)
        }

        else if (window.scrollY >= this.x.breakPosition && window.scrollY < (this.x.breakPosition + this.x.stopHeight))
            this.bs = true

        else
        {
            if (this.ld !== this.d && !!this.ld)
                this.bs = true

            else if (this.d === 'down')
                this._s(this.s.h)

            else if (this.d === 'up')
                this._s(this.s.o)

            else if (!this.d)
            {
                this._s(this.s.h)
                this.d = 'down'
            }
        }
    }

    _b()
    {
        const c = this._p()

        switch(this.d) {

            case 'up':
                if (c < 0)
                    this.el.style.top = c + 'px'
                else
                {
                    this._s(this.s.o)
                    this.bs = false
                }
                break

            case 'down':
                if (c <= 0 && c > -this.x.stopHeight)
                    this.el.style.top = c + 'px'
                else
                {
                    this._s(this.s.h)
                    this.bs = false
                }
                break
        }
    }

    play()
    {
        if (this.sd)
        {
            document.body.style.overflowY = ''
            this.sd = false
        }

        this.p = false
        this._h()
        this.o.onPlay.call(this)
    }

    stop(o = false, d = false)
    {
        if (o)
        {
            this._s(this.s.o)
            this.d = 'up'
        }

        if (d)
        {
            document.body.style.overflowY = 'hidden'
            this.sd = d
        }

        this.p = true
        this.o.onPause.call(this)
    }

    isPaused()
    {
        return this.p
    }
}

module.exports = StickyHeader;