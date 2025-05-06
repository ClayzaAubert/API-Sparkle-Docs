![Logo](https://i.ibb.co.com/wrxBY9X/Sparkle.jpg)

# API Sparkle

> ⚠️ **Status: Tidak Aktif**
> Semua fitur API Sparkle telah dipindahkan sepenuhnya ke platform **Maelyn**.
> Silakan gunakan [https://maelyn.tech](https://maelyn.tech) untuk mengakses fitur-fitur terbaru dan dukungan penuh.

---

API ini sebelumnya merupakan **API FREE** tanpa limit harian.
Kini, semua layanan telah dialihkan ke sistem yang lebih baik dan stabil di Maelyn.
Mohon gunakan layanan baru tersebut untuk pengalaman yang optimal.

🔗 Kunjungi:

* 🌐 **[Maelyn Tech](https://maelyn.tech)** — Layanan API terbaru
* 🌐 **[Maelyn Group](https://maelyn.my.id)**

---

## Disclaimer
Kami tidak pernah menyimpan akun pengguna di dalam sistem kami. Kami hanya menyediakan API sebagai pihak ketiga untuk diintegrasikan ke dalam aplikasi Anda.

Follow [Channel WhatsApp](https://s.id/MaelynChannel) saya untuk notifikasi UPDATE pada API Sparkle ini.

## Features

- Payment Gateway (Saweria)
- CDN Open Source


## API Reference

#### GET CDN GITHUB

```http
  GET /:username/:repository/:path(*)
```
```http
  EXAMPLE https://clayza.biz.id/ClayzaAubert/API-Sparkle-Docs/Result-Saweria-Login.json
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username Github |
| `repository` | `string` | **Required**. Repository Github |
| `path` | `string` | **Required**. Path Github |

#### POST Saweria Login

```http
  POST /api/saweria/login
```
[Result](https://clayza.biz.id/ClayzaAubert/API-Sparkle-Docs/Result-Saweria-Login.json)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Saweria |
| `password` | `string` | **Required**. Your Password Saweria |

#### Post Saweria Create Payment 

```http
  POST /api/saweria/createPayment
```
[Result](https://clayza.biz.id/ClayzaAubert/API-Sparkle-Docs/Result-Saweria-CreatePayment.json)

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Your User ID |
| `amount`      | `number` | **Required**. Your amount (Minimum Rp. 1.000) |
| `name`      | `string` | **Required**. Name order |
| `email`      | `string` | **Required**. Email Order |
| `msg`      | `string` | **Required**. Message Order |

#### GET Saweria Check Payment

```http
  GET /api/saweria/checkPayment/:user_id/:id
```
[Result](https://clayza.biz.id/ClayzaAubert/API-Sparkle-Docs/Result-Saweria-CheckPayment.json)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. Your User ID |
| `id` | `string` | **Required**. ID Payment |

#### POST Saweria balance

```http
  POST /api/saweria/balance
```
[Result](https://clayza.biz.id/ClayzaAubert/API-Sparkle-Docs/Result-Saweria-CheckBalance.json)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Saweria |
| `password` | `string` | **Required**. Your Password Saweria |


## Contributors
- [@ClayzaAubert](https://github.com/ClayzaAubert)
- [@Arifzyn19](https://github.com/arifzyn19)

