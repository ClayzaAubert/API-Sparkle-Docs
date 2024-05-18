
![Logo](https://i.ibb.co.com/wrxBY9X/Sparkle.jpg)


# API Sparkle

Ini Adalah API kedua saya, dengan sedikit fitur, silakan kunjungi https://api.maelyn.my.id untuk full fiturnya.

## Server Domain
- https://clayza.my.id *[ Clayza Server ]* | **OFF**
- https://rosalyn.my.id *[ Rosalyn Server ]* | **ON**
- https://aubert.my.id *[ Aubert Server ]* | **ON**

## Disclaimer
Kami tidak pernah menyimpan akun pengguna di dalam sistem kami. Kami hanya menyediakan API sebagai pihak ketiga untuk diintegrasikan ke dalam aplikasi Anda.

## Features

- Payment Gateway (Saweria)
- CDN Open Source


## API Reference

#### GET CDN GITHUB

```http
  GET /:username/:repository/:path(*)
  EXAMPLE /ClayzaAubert/library/ALAN%20WALKER%20LILY.mp3
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

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Saweria |
| `password` | `string` | **Required**. Your Password Saweria |

#### Post Saweria Create Payment 

```http
  POST /api/saweria/createPayment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Your User ID |
| `amount`      | `number` | **Required**. Your amount (Minimum Rp. 10.000) |
| `msg`      | `string` | **Required**. Message Order |

#### GET Saweria Check Payment

```http
  GET /api/saweria/checkPayment/:user_id/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. Your User ID |
| `id` | `string` | **Required**. ID Payment |

#### POST Saweria balance

```http
  POST /api/saweria/balance
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email Saweria |
| `password` | `string` | **Required**. Your Password Saweria |


## Contributors
- [@ClayzaAubert](https://github.com/ClayzaAubert)
- [@Arifzyn19](https://github.com/arifzyn19)

