  it('when today 365 days before target should return 365 days', () => {
    const today = new Date(2022, 8, 30, 15, 0, 0, 0)
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    const period = PeriodCalculator.calculate(today, target)

    assert(period.days === 365)
    assert(period.hours === 0)
    assert(period.minutes === 0)
    assert(period.seconds === 0)
    assert(period.beforeEvent)
  });

  it('when today 365 days 1 hour before target should return 365 days 1 hour', () => {
    const today = new Date(2022, 8, 30, 14, 0, 0, 0)
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    const period = PeriodCalculator.calculate(today, target)

    assert(period.days === 365)
    assert(period.hours === 1)
    assert(period.minutes === 0)
    assert(period.seconds === 0)
    assert(period.beforeEvent)
  });

  it('when today 1 day 1 hour 1 minute before target should return 1 day 1 hour 1 minute', () => {
    const today = new Date(2023, 8, 29, 13, 59, 0, 0)
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    const period = PeriodCalculator.calculate(today, target)

    assert(period.days === 1)
    assert(period.hours === 1)
    assert(period.minutes === 1)
    assert(period.seconds === 0)
    assert(period.beforeEvent)
  });

  it('when today 1 day 1 hour 1 minute 1 seconds before target should return 1 day 1 hour 1 minute 1 seconds', () => {
    const today = new Date(2023, 8, 29, 13, 58, 59, 0)
    const target = new Date(2023, 8, 30, 15, 0, 0, 0)
    const period = PeriodCalculator.calculate(today, target)
    
    assert(period.days === 1)
    assert(period.hours === 1)
    assert(period.minutes === 1)
    assert(period.seconds === 1)
    assert(period.beforeEvent)
  });

  it('when today 1 day 1 hour 1 minute 1 seconds after target should return 1 day 1 hour 1 minute 1 seconds', () => {
    const target = new Date(2023, 8, 29, 13, 58, 59, 0)
    const today = new Date(2023, 8, 30, 15, 0, 0, 0)
    const period = PeriodCalculator.calculate(today, target)
    console.log(period)
    assert(period.days === 1)
    assert(period.hours === 1)
    assert(period.minutes === 1)
    assert(period.seconds === 1)
    assert(!period.beforeEvent)
  });

//presentable period
  it('when period before event should present message', () => {
    const message = new Period(1, 1, 1, 1, true).presentable()
    assert(message === 'Do ślubu pozostało 1 dni 1 godzin 1 minut 1 sekund ');
  });

  it('when period after event should present message', () => {
    const message = new Period(1, 1, 1, 1, false).presentable()
    assert(message === 'Ślub odbył się 1 dni 1 godzin 1 minut 1 sekund temu');
  });

  it('skipping zero values', () => {
    const message = new Period(0, 1, 0, 1, true).presentable()
    assert(message === 'Do ślubu pozostało 1 godzin 1 sekund ');
  });

  it('event started', () => {
    const message = new Period(0, 0, 0, 0, true).presentable()
    assert(message === 'Ślub zaczął się');
  });



  

//   it('should pass', function() {
//     assert(1 === 1);
//   });
