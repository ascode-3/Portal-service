import React, { useState } from 'react';

const LinkPage = () => {
  // 샘플 데이터에 이미지 경로 추가
  const [links] = useState([
    { 
      id: 1, 
      title: '충격량 시뮬레이션', 
      description: '물리 시뮬레이션을 통해 충격량을 체험해보세요',
      url: 'https://ascode33.netlify.app/',
      image: '/images/test images.png'
    },
    { 
      id: 2, 
      title: '지구 테트리스', 
      description: '지구를 주제로 한 재미있는 테트리스 게임',
      url: 'https://and-tetris.web.app/',
      image: '/images/test images.png'
    },
    { 
      id: 3, 
      title: '포트폴리오', 
      description: '나의 작업물을 소개하는 포트폴리오',
      url: '#',
      image: '/images/test images.png'
    },
    { 
      id: 4, 
      title: '블로그', 
      description: '기술과 일상을 기록하는 공간',
      url: '#',
      image: '/images/test images.png'
    }
  ]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '40px 20px',
      fontFamily: '"Noto Sans KR", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#333',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          나의 링크 모음
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          padding: '0 16px'
        }}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                textDecoration: 'none',
                color: '#333',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
                }
              }}
            >
              <div style={{
                width: '100%',
                height: '160px',
                overflow: 'hidden'
              }}>
                <img 
                  src={link.image} 
                  alt={link.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                  color: '#2c3e50'
                }}>
                  {link.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5',
                  minHeight: '42px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
