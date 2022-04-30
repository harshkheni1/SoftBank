export function isMobileScreen() {
    let width = window.innerWidth;
    if(width >= 768) {
        return false;
    } else {
        return true;
    }
}

export function renderAmount(type, amount) {
    if(type === 'debit') {
        return <span className="text-red">-{amount}</span>
    }
    else if(type === 'credit') {
        return <span className="text-green">+{amount}</span>
    }
    else{
        return <span>{amount}</span>
    }
}

export function renderReturnPercentage(position, percentage) {
    if(position === 'down') {
        return <span className="text-red">-{percentage}</span>
    }
    else if(position === 'up') {
        return <span className="text-green">+{percentage}</span>
    }
    else{
        return <span>{percentage}</span>
    }
}