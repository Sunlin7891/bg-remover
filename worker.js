export default {
  async fetch(request, env) {
    // 处理 OPTIONS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // 只处理 POST 请求
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // 获取上传的图片
      const formData = await request.formData();
      const imageFile = formData.get('image');
      
      if (!imageFile) {
        return new Response('No image provided', { status: 400 });
      }

      // 调用 remove.bg API
      const removeBgResponse = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': env.REMOVE_BG_API_KEY,
        },
        body: imageFile,
      });

      if (!removeBgResponse.ok) {
        const error = await removeBgResponse.text();
        return new Response(error, { 
          status: removeBgResponse.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        });
      }

      // 返回处理后的图片（内存中直接转发）
      return new Response(removeBgResponse.body, {
        headers: {
          'Content-Type': 'image/png',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch (error) {
      return new Response(`Error: ${error.message}`, { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  }
};
