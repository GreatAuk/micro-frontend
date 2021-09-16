import { request, history } from 'umi'

export function Hello(): number {
  console.log('[4]-test.ts', request)
  console.log('hello world')
  return 1111
}

export async function updatePet(body, options) {
  return request<any>('/pet', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
