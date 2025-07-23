// Инициализация графика
const tvWidget = new TradingView.widget({
    "autosize": true,
    "symbol": "FX:AUDNZD",
    "interval": "1",
    "theme": "dark",
    "style": "1",
    "hide_top_toolbar": true,
    "hide_side_toolbar": true,
    "container_id": "tradingview-chart",
    "overrides": {
        "paneProperties.background": "#0e1a2b",
        "mainSeriesProperties.candleStyle.upColor": "#089981",
        "mainSeriesProperties.candleStyle.downColor": "#f23645"
    }
});

// Обработка выбора пары
document.querySelectorAll('.pair-option').forEach(option => {
    option.addEventListener('click', function() {
        const pair = this.textContent;
        const symbolMap = {
            "AUD/NZD": "FX:AUDNZD",
            "EUR/USD": "FX:EURUSD",
            "BTC/USDT": "BINANCE:BTCUSDT"
        };
        
        // Обновляем отображение
        document.querySelector('.pair-name').textContent = pair;
        document.querySelector('.pair-option.active').classList.remove('active');
        this.classList.add('active');
        
        // Меняем график
        tvWidget.chart().setSymbol(symbolMap[pair]);
    });
});