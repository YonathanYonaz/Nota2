let items = [];

function formatTanggal() {
    const bulanNama = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const tgl = new Date();
    const hari = tgl.getDate();
    const bulan = bulanNama[tgl.getMonth()];
    return `${hari} ${bulan}`;
}

function addItem() {
    const n = document.getElementById('itemName').value;
    const q = parseInt(document.getElementById('itemQty').value);
    const p = parseInt(document.getElementById('itemPrice').value);
    const custName = document.getElementById('customerName').value;

    if (n && q > 0 && p >= 0) {
        items.push({ n, q, p });
        document.getElementById('itemName').value = '';
        document.getElementById('itemQty').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('namaPelangganStruk').innerText = custName ? `Pelanggan: ${custName}` : '';
        render();
    } else alert('Isi data barang dengan benar');
}

function render() {
    const tb = document.getElementById('itemList');
    tb.innerHTML = '';
    let total = 0;
    items.forEach(i => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i.n}</td><td>${i.q}</td><td>${(i.q * i.p).toLocaleString()}</td>`;
    tb.appendChild(tr);
    total += i.q * i.p;
    });
    document.getElementById('grandTotal').innerText = total.toLocaleString();
}

function printStruk() {
    document.getElementById('tanggal').innerText = formatTanggal();
    window.print();
}

function resetStruk() {
    items = [];
    document.getElementById('itemList').innerHTML = '';
    document.getElementById('grandTotal').innerText = '0';
    document.getElementById('customerName').value = '';
    document.getElementById('namaPelangganStruk').innerText = '';
    document.getElementById('tanggal').innerText = '';
}

document.getElementById('tanggal').innerText = formatTanggal();